import pandas as pd

df = pd.read_csv("data/supermarket_sales_sheet.csv")
df["Date"] = pd.to_datetime(df["Date"])
df["Hour"] = pd.to_datetime(df["Time"],format="%H:%M").dt.hour


async def univariate_data_analysis(group_by: str, interested_columns: str, title: str) -> dict:
    """This function returns a univariate analysis of the data
    Args:
        group_by (str): The column to group by
        interested_columns (str): The columns to perform analysis on
        title (str): The title of the analysis
    Returns:
        dict: A dictionary containing the analysis
    """
    group_by_data = (
        df.groupby(group_by)[interested_columns].sum().sort_values(ascending=False)
    )
    label_names = group_by_data.index.tolist()
    data = group_by_data.values.tolist()
    return dict(label=title, labels=label_names, data=data)


async def get_shopping_hours() -> dict:
    """This function returns a univariate analysis of the data
    Args:
        None
    Returns:
        dict: A dictionary containing the analysis
    """
    bins = [0,12,18,24]
    labels = ["Morning","Afternoon","Evening"]
    df["Daytime"] = pd.cut(df["Hour"], bins=bins, labels=labels, right=False,include_lowest=True)
    shopping_time = df.groupby("Branch")["Daytime"].value_counts()
    final_shopping_time_data = {"labels":["Branch A","Branch B","Branch C"],"label":"Shopping Time"}

    for index in ["A","B","C"]:
        result = {"label":index,"data":shopping_time[index].values.tolist(),"labels":labels}
        final_shopping_time_data[index] = result
    
    return final_shopping_time_data
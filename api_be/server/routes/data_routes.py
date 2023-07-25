from fastapi import APIRouter
from server.service.supermarket_service import *

data_router = APIRouter()

@data_router.get("/data", tags=["Data"], response_model=dict,response_description="Gets the data for the dashboard")
async def get_data():
    """This function returns the data for the dashboard"""

    """This returns the total sales per branch"""
    total_sales_per_branch = await univariate_data_analysis("Branch","Total","Total Sales Per Branch")

    """This returns the total sales per gender type"""
    total_sales_by_gender = await univariate_data_analysis("Gender","Total","Total sales by gender")

    """This returns the gross income per branch"""
    gross_income_per_branch = await univariate_data_analysis("Branch","gross income","Gross income per branch")

    """This return the product line by sales"""
    product_line_by_sales = await univariate_data_analysis("Product line","Total","Product line by sales")

    """This returns the gross profit by product line"""
    gross_profit_by_product_line = await univariate_data_analysis("Product line","gross income","Gross profit by product line")

    """This returns the product line by rating"""
    product_line_by_rating = await univariate_data_analysis("Product line","Rating","Product line by rating")

    """This returns the payment method by sales"""
    payment_method_by_sales = await univariate_data_analysis("Payment","Total","Payment method by sales")

    """This returns the product line by quantity"""
    product_line_by_quantity = await univariate_data_analysis("Product line","Quantity","Product line by quantity")

    """This returns the busy shopping hours"""
    shopping_hours = await get_shopping_hours()

    return {
        "data":{
            "total_sales_per_branch":total_sales_per_branch,
            "total_sales_per_gender":total_sales_by_gender,
            "gross_income_per_branch":gross_income_per_branch,
            "product_line_by_sales":product_line_by_sales,
            "gross_profit_by_product_line":gross_profit_by_product_line,
            "product_line_by_rating":product_line_by_rating,
            "payment_method_by_sales":payment_method_by_sales,
            "product_line_by_quantity":product_line_by_quantity,
            "shopping_hours":shopping_hours
        }
    }
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
    return 
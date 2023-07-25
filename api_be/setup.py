import setuptools
import os

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="api",
    version="0.0.1",
    author="Jamie Omondi",
    author_email="cruiseomondi90@gmail.com",
    description="A FastAPI backend for sale analytics dashboard",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/jamie-codez/sale_analysis_dash_be", 
    packages=setuptools.find_packages(),
    classifiers=[], # https://pypi.org/classifiers/
    python_requires='>=3.6',
)
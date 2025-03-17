def calculate_consumption_reduction(price_increase_percentage):
  """Calculates the percentage reduction in consumption needed to keep expenditure the same.

  Args:
    price_increase_percentage: The percentage increase in the price of the item.

  Returns:
    The percentage reduction in consumption needed.
  """

  # Calculate the new price as a factor of the original price
  new_price_factor = 1 + (price_increase_percentage / 100)

  # Calculate the percentage reduction in consumption
  consumption_reduction_percentage = ((new_price_factor - 1) / new_price_factor) * 100

  return consumption_reduction_percentage

# Example usage:
price_increase = 25  # 25% price increase
consumption_reduction = calculate_consumption_reduction(price_increase)

print(f"To maintain the same expenditure, the person needs to reduce consumption by {consumption_reduction:.2f}%.")
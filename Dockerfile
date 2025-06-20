FROM php:8.2-cli

# Set working directory
WORKDIR /app

# Copy all files into container
COPY . .

# Expose port Render expects
EXPOSE 10000

# Start built-in PHP server
CMD ["php", "-S", "0.0.0.0:10000", "-t", "."]

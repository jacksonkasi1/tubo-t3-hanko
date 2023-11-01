# Use a base image with Node.js 16.x
FROM node:16

# Set the working directory in the Docker container to /app
WORKDIR /app

# Copy your application files into the Docker image
COPY . .

# Install the application's dependencies inside the Docker image
RUN npm i pnpm bun -g && pnpm install

# generate the prisma client
RUN pnpm db-generate

# Expose port 80 for the application to use
EXPOSE 80  5000

# Start Node.js application
CMD ["pnpm", "start-be"]
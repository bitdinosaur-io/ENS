# Set Base Images
FROM node:18

# Set Work dir
WORKDIR /usr/src/app

# COPY ALL file
COPY . ./

# Install dependencies
RUN yarn

# Build Next.js Project
RUN yarn build

EXPOSE 3000

# RUN Project
CMD ["yarn", "start"]
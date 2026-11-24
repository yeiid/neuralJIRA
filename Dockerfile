FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

ARG PUBLIC_SITE_SEASON=auto
ARG PUBLIC_EMAILJS_SERVICE_ID=neuraljira
ARG PUBLIC_EMAILJS_TEMPLATE_ID=template_axw8cco
ARG PUBLIC_EMAILJS_PUBLIC_KEY=RI4svDyx_om5FK-bF

ENV PUBLIC_SITE_SEASON=${PUBLIC_SITE_SEASON}
ENV PUBLIC_EMAILJS_SERVICE_ID=${PUBLIC_EMAILJS_SERVICE_ID}
ENV PUBLIC_EMAILJS_TEMPLATE_ID=${PUBLIC_EMAILJS_TEMPLATE_ID}
ENV PUBLIC_EMAILJS_PUBLIC_KEY=${PUBLIC_EMAILJS_PUBLIC_KEY}

RUN pnpm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/ /usr/share/nginx/html/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

# 🐭 maus: Source code for maus.floof.gay, a project describing a specific character in Maus.
# Copyright (c) 2022 Noel <cutie@floofy.dev>
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

FROM node:18-alpine AS builder

LABEL MAINTAINER="Noel <cutie@floofy.dev>"
RUN apk update && apk add git ca-certificates

WORKDIR /build/maus
COPY . .
RUN yarn global add typescript eslint
RUN yarn

# https://github.com/webpack/webpack/issues/14532
RUN NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS=--openssl-legacy-provider NODE_ENV=production yarn build
RUN rm -rf src

FROM node:18-alpine

LABEL MAINTAINER="Noel <cutie@floofy.dev>"

WORKDIR /app/noel/maus
COPY --from=builder /build/maus/node_modules .
COPY --from=builder /build/maus/.next .
COPY --from=builder /build/maus/package.json .
COPY --from=builder /build/maus/yarn.lock .

USER 1001
ENTRYPOINT [ "yarn", "start" ]

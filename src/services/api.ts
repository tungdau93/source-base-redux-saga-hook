import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const baseURL = "https://jsonplaceholder.typicode.com/"
const apiClient = axios.create({
  baseURL,
  withCredentials: true,
  responseType: "json",
})

const defaultHeaders = {
  "Content-Type": "application/json",
}

const defaultConfig = async (): Promise<AxiosRequestConfig> => {
  const defaultConfig: AxiosRequestConfig = {
    headers: { ...defaultHeaders },
  }
  return defaultConfig
}

const mergeConfig = async (
  config?: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const _defaultConfig = await defaultConfig()
  let headers = _defaultConfig.headers
  if (config && config.headers) {
    headers = { ...headers, ...config.headers }
  }
  return { ..._defaultConfig, ...config, headers }
}

const requestErrorHandler = (
  error?: any,
  skipAlert: boolean = false
): Promise<any> => {
  return Promise.reject(error)
}

export async function get(
  url: string,
  config?: AxiosRequestConfig
): Promise<any> {
  const _config = await mergeConfig(config)
  return apiClient
    .get(`${url}`, _config)
    .then((res) => res)
    .catch(requestErrorHandler)
}

export async function post(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<any> {
  const _config = await mergeConfig(config)
  return apiClient
    .post(`${url}`, data, _config)
    .then((res) => res.data)
    .catch(requestErrorHandler)
}

export async function put(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<any> {
  const _config = await mergeConfig(config)
  return apiClient
    .put(`${url}`, data, _config)
    .then((res) => res.data)
    .catch(requestErrorHandler)
}

export async function deleteRequest(
  url: string,
  config?: AxiosRequestConfig
): Promise<any> {
  const data = (config && config.data) || ""
  const _config = await mergeConfig({ ...config, data })
  return apiClient
    .delete(`${url}`, _config)
    .then((res) => res.data)
    .catch(requestErrorHandler)
}

export async function getBuffer(url: string): Promise<AxiosResponse> {
  const config = await mergeConfig({
    headers: {
      "Content-Type": "image/*",
    },
    responseType: "arraybuffer",
  })
  return apiClient
    .get(`${url}`, config)
    .catch((error) => requestErrorHandler(error, true))
}

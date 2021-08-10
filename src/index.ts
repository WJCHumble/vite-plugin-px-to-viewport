import { Plugin } from 'vite'

export default function vitePluginPxTransform(options: Record<string, string> = {}): Plugin {
  return {
    name: 'vite-plugin-px-transfrom',
    transform(code: string, id: string) {
      /**
			 * TOOD:
			 * - 转化 template 中的 style
			 * - 转化 sfc style block
			 * - 转化 less、sass、scss、stylus 文件
			 */
      return code
    },
  }
}

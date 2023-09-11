/*
 * @Author: 刘勇 15102239007@163.com
 * @Date: 2023-08-10 11:20:27
 * @LastEditors: 刘勇 15102239007@163.com
 * @LastEditTime: 2023-08-30 14:17:23
 * @FilePath: \middle-ground\tailwind.config.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontSize: {
       xs: ['0.25rem', '0.35rem'], 
       sm: ['0.35rem', '0.45rem'], 
       basse: ['0.45rem', '0.55rem'], 
       lg: ['0.55rem', '0.65rem'], 
       xl: ['0.65rem', '0.75rem'], 
      },
      boxShadow: {
        'l-white': '-10px 0 10px white'
      }
    },
  },
  plugins: [],
}

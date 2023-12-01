import React from 'react'
import styles from './garanty.module.scss'
import { getMetaData } from '@/api/cmsAPI'
import { Metadata } from 'next'





export async function generateMetadata(): Promise<Metadata> {
  const data = await getMetaData('warranty')
  return {
    title: data?.attributes?.meta?.title,
    }
}




const Garanty = () => {
  return (
    <div className={styles.root} >
      <h1>Гарантии</h1>
      <p className={styles.info} >Дорогие покупатели, мы стремимся предоставить Вам лучший опыт при покупке электронных товаров, таких как игры и аккаунты. Мы гарантируем, что все товары, представленные на нашем сайте, соответствуют высоким стандартам качества. Для обеспечения Вашего уверенного покупательского опыта, мы также предоставляем следующие гарантии:</p>

      <ul>
        <li>
          <h3>
            Гарантия Легальности и Безопасности:
          </h3>
          <p>
            Все наши товары, включая игры и аккаунты, предоставляются в соответствии с политикой и правилами платформы digiseller.ru. Мы гарантируем, что Вы приобретаете легальные и безопасные продукты.

          </p>
        </li>
        <li>
          <h3>
            Гарантия Качества:
          </h3>
          <p>
            Мы тщательно отбираем продукты, представленные на нашем сайте, и гарантируем их высокое качество. В случае каких-либо проблем, связанных с качеством товара, мы готовы предоставить Вам поддержку и решить вопрос.

          </p>
        </li>
        <li>
          <h3>
            Электронная Доставка на Ваш E-mail:
          </h3>
          <p>
            Все приобретенные электронные товары будут моментально доставлены на Ваш зарегистрированный E-mail.

          </p>
        </li>
      </ul>
      <p className={styles.info} >
        Пожалуйста, помните, что мы являемся независимым продавцом, полностью соблюдаем правила и стандарты, установленные платформой digiseller.ru. Мы ценим Ваш выбор и стремимся сделать Ваш опыт покупки на нашем сайте приятным и надежным.
      </p>






    </div>
  )
}

export default Garanty
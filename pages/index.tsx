import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { PizzaData } from '../types/pizza'
import { fetchData } from '../data/dummyData'
import { PizzaCard } from '../components/pizzaWidget/PizzaCard'
import { PizzaModal } from '../components/pizzaWidget/PizzaModal'
import { Cart } from '../components/pizzaWidget/Cart'

const Home: NextPage<{ pizzaData: PizzaData }> = ({ pizzaData }) => {
  console.log(pizzaData)

  return (
    <div>
      <Head>
        <title>Coding Challenge</title>
        <meta name="description" content="Coding Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionWrapper>
        <PizzaCardWrapper>
          {pizzaData.pizza.map((item, key) => (
            <PizzaCard pizza={item} key={`PizzaCard${key}`} />
          ))}
        </PizzaCardWrapper>
        <CartWrapper>
          <Cart />
        </CartWrapper>
      </SectionWrapper>
      <PizzaModal toppings={pizzaData.toppings} size={pizzaData.size} />
    </div>
  )
}

Home.getInitialProps = async () => {
  const pizzaData: PizzaData = await fetchData()
  return { pizzaData }
}

export default Home

const SectionWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  width: 100%;

  @media (max-width: 610px) {
    flex-direction: column-reverse;
  }
`

const PizzaCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 1rem;
  flex: 1 1 75%;
  justify-content: center;
`
const CartWrapper = styled.div`
  flex: 0 0 25%;

  @media (max-width: 610px) {
    margin-bottom: 2rem;
  }
`

import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Guide from '../components/Guide'

const Coins = ({coins}) => {
  return (
    <div>
      <Guide />
      <CoinSearch coins={coins} />
    </div>
  )
}

export default Coins
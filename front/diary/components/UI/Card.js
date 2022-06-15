import React from 'react'

// 검색결과가 들어가는 카드 UI

const Card = (props) => {
  return (
    <Container>
        <h3>{props.children}</h3>
        <p>{props.children}</p>
        <h4>{props.children}</h4>
    </Container>
  )
}

export default Card

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    background-color: white;
    border-radius: 5px;
`
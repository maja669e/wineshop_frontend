import WineCard from './WineCard';
import styled from 'styled-components'

const Container = styled.div `
padding: 100px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const WineList = ({wines}) => {

    return (

        <div>
            <h1 style={{
                    textAlign: "center"
                }}>Our Wines</h1>

            <Container>
                {
                    wines.map((wine) => {
                        return (<WineCard wine={wine}/>)

                    })
                }
            </Container>

        </div>

    )
}

export default WineList;
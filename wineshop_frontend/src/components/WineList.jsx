import WineCard from './WineCard';

const WineList = ({wines}) => {


    return (
        <div>
        {wines.map((wine) => {
                return (
                   <WineCard wine={wine}/>
                )

            })
        }

    </div>
    
    )
}

export default WineList;
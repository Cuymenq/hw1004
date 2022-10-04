export default function FeaturedCar(props) {

    function displaycolors() {
        const colorElements = [];

        for(const key in props.car.colors) {
            const val = props.car.colors[key]

            colorElements.push(<li key={key}>{key}: {val}</li>)
        }

        return colorElements
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2>{ props.car.name }</h2>
                <p><strong>{ props.car.year }</strong></p>
                <ul>
                    {displaycolors()}
                </ul>
            </div>
        </div>
    )
}
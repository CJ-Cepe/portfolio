function Experience({content}) {
    const {main, secondary, location, date, details} = content.experience
    const detailList = details.map((detail, index)=>
        <li key={index}>{detail}</li>
        )
    return (
        <div className="about-section">
            <h2>{main} <span>{location}</span></h2>
            <h3>{secondary} <span>{date}</span></h3>
            <ul>{detailList}</ul>
        </div>
    )
}

function Education({content}) {
    const {main, secondary, location, date, details} = content.education
    const detailList = details.map((detail, index)=>
        <li key={index}>{detail}</li>
        )
    return (
        <div className="about-section">
            <h2>{main} <span>{location}</span></h2>
            <h3>{secondary} <span>{date}</span></h3>
            <ul>{detailList}</ul>
        </div>
    )
}

function Training({content}){
    const details = content.training.map((detail, index)=>
        <li key={index}>{detail.name} <span>{detail.date}</span></li>
        )
    return (
        <div className="about-section">
            <ul>{details}</ul>
        </div>
    )
}

export {Experience, Education, Training}
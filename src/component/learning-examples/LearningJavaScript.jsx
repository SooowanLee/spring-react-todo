const person = {
    name: '우은차',
    address: {
        line1: "강남대로 321",
        city: '서울',
        country: '대한민국'
    },
    profiles: ['네이버', '카카오', '인스타그램'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript() {
    return (
        <div>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </div>
    )
}
export default function Button() {
    //creating object
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgs.jpg',
        imagesize: 90,
    };

    return (
        <>
            <h1>username :{user.name}</h1>
            <h2>imaheUrl :{user.imageUrl}</h2>
            <h3>imagesize :{user.imagesize}</h3>
            <button> I 'm a Button</button>
        </>
    )
}
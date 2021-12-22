import './BoxImages.css';

function BoxImages({text, image, name}) {

    return (

        <div className="box-images"
       style={{
              backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
       }}>
            <p>{text}</p>
        </div>
    )
}

export default BoxImages;
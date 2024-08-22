export default function HobbyLinks() {
    let pageTitle = "My Hobbies";
    let hobbyLinks = [
        'https://www.thingiverse.com/',
        'https://www.simplyrecipes.com/',
        'https://drawingprompt.com/'
    ];

    return (
        <div>
            <h3>{pageTitle}</h3>
            <a href={hobbyLinks[0]}>3D Printing</a><br />
            <a href={hobbyLinks[0]}>Cooking</a><br />
            <a href={hobbyLinks[0]}>Drawing</a>
        </div>
    );
}
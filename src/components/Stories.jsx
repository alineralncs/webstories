import Stories from 'react-insta-stories';

const stories = [
	{
		url: './src/assets/salto.png',
	},
    {
		url: './src/assets/Estadão.jpeg',
	},
    {
		url: './src/assets/Tenor.gif',
	},
    {
		url: './src/assets/b-3.png',
	},
];
export function StoriesW() {
    return (
        <div className="flex justify-center h-screen mt-10 shadow-2xl rounded-xl">
        <Stories 
        stories={stories}
        defaultInterval={10000}
        width={432}
        height={768}
        className="w-full"
        
    />
    </div>
    )
}
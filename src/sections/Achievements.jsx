function Achievements() {

return (

<section id="achievements" className="py-32">

<h2 className="text-5xl font-bold text-center mb-20">
Achievements & GitHub Stats
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

<img
src="https://github-readme-stats.vercel.app/api?username=yaradawa988&show_icons=true&theme=tokyonight"
alt="github stats"
/>

<img
src="https://github-readme-stats.vercel.app/api/top-langs/?username=yaradawa988&layout=compact&theme=tokyonight"
alt="top languages"
/>

</div>

<div className="flex justify-center mt-12">

<img
src="https://github-readme-activity-graph.vercel.app/graph?username=yaradawa988&theme=tokyo-night"
/>

</div>

</section>

)

}

export default Achievements
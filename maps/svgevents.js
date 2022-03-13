// Customize these as you see fit

// Initialize map
function svgevents_load(svgdoc)
{
	svgdoc.getElementById("svgmap").setAttributeNS(null,"fill","#000000");
	svgdoc.getElementById("svgmap").setAttributeNS(null,"stroke","#ffffff");
}

// Return false to prevent display
function svgevents_hover(id, name)
{
	console.log("svgevents_hover", id, name);
	return true;
}
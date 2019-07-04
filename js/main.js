var mcLink = document.getElementById("serverLink");

mcLink.addEventListener("click",function(){
		let mcCopy = mcLink.textContent;
		let link = document.createElement('input');
		document.body.appendChild(link);
		link.value = mcCopy;
		link.select();
		document.execCommand('copy');
		link.remove();



		mcLink.text = "Copied to clipboard!";



		setTimeout(function() {
			mcLink.text = "Connect to server: mc.nonstop.world"
		}, 2000);
		})
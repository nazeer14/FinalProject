(async function () { 
	const data = await fetch("data.json"); 
	const res = await data.json(); 

	let std = res; 
	let selectedstdId = std[0].id; 
	let selectedstd = std[0]; 

	const stdList = document.querySelector( 
		".std__names--list"
	); 
	const stdInfo = document.querySelector( 
		".std__single--info"
	); 
l	// Add std - START 
	const createstd = document.querySelector( 
		".createstd"
	); 
	const addstdModal = 
		document.querySelector(".addstd"); 
	const addstdForm = document.querySelector( 
		".addstd_create"
	); 

	createstd.addEventListener("click", () => { 
		addstdModal.style.display = "flex"; 
	}); 

	addstdModal.addEventListener("click", (e) => { 
		if (e.target.className === "addstd") { 
			addstdModal.style.display = "none"; 
		} 
	}); 

	// Set std age to be entered minimum 18 years 
	const dobInput = document.querySelector( 
		".addstd_create--dob"
	); 
	dobInput.max = `${ 
		new Date().getFullYear() - 18 
	}-${new Date().toISOString().slice(5, 10)}`; 

	addstdForm.addEventListener("submit", (e) => { 
		e.preventDefault(); 
		const formData = new FormData(addstdForm); 
		const values = [...formData.entries()]; 
		let empData = {}; 
		values.forEach((val) => { 
			empData[val[0]] = val[1]; 
		}); 
		empData.id = std[std.length - 1].id + 1; 
		empData.age = 
			new Date().getFullYear() - 
			parseInt(empData.dob.slice(0, 4), 10); 
		empData.imageUrl = 
			empData.imageUrl || 
        "lon.jpg"; 
		std.push(empData); 
		renderstd(); 
		addstdForm.reset(); 
		addstdModal.style.display = "none"; 
	}); 
	// Add std - END 

	// Select std Logic - START 
	stdList.addEventListener("click", (e) => { 
		if ( 
			e.target.tagName === "SPAN" && 
			selectedstdId !== e.target.id 
		) { 
			selectedstdId = e.target.id; 
			renderstd(); 
			renderSinglestd(); 
		} 
		// std Delete Logic - START 
		if (e.target.tagName === "I") { 
			std = std.filter( 
				(emp) => 
					String(emp.id) !== 
					e.target.parentNode.id 
			); 
			if ( 
				String(selectedstdId) === 
				e.target.parentNode.id 
			) { 
				selectedstdId = std[0]?.id || -1; 
				selectedstd = std[0] || {}; 
				renderSinglestd(); 
			} 
			renderstd(); 
		} 
		// std Delete Logic - END 
	}); 
	// Select std Logic - END 

	// Render All std Logic - START 
	const renderstd = () => { 
		stdList.innerHTML = ""; 
		std.forEach((emp) => { 
			const std = document.createElement("span"); 
			std.classList.add( 
				"std__names--item"
			); 
			if ( 
				parseInt(selectedstdId, 10) === emp.id 
			) { 
				std.classList.add("selected"); 
				selectedstd = emp; 
			} 
			std.setAttribute("id", emp.id); 
			std.innerHTML = `${emp.firstName} ${emp.lastName} 
				<i class="stdDelete">&#10060;</i>`; 
			stdList.append(std); 
		}); 
	}; 
	// Render All std Logic - END 

	// Render Single std Logic - START 
	const renderSinglestd = () => { 
		// std Delete Logic - START 
		if (selectedstdId === -1) { 
			stdInfo.innerHTML = ""; 
			return; 
		} 
		// std Delete Logic - END 

		stdInfo.innerHTML = ` 
		<img src="${selectedstd.imageUrl}" /> 
		<span class="std__single--heading"> 
		${selectedstd.firstName} ${selectedstd.lastName} 
			(${selectedstd.age}) 
		</span> 
		<span>${selectedstd.address}</span> 
		<span>${selectedstd.email}</span> 
		<span>Mobile - ${selectedstd.contactNumber}</span> 
		<span>DOB - ${selectedstd.dob}</span> 
	`; 
	}; 
	// Render Single std Logic - END 

	renderstd(); 
	if (selectedstd) renderSinglestd(); 
})();

export default function Header() {
return (
    <div className="flex justify-between items-center h-20 bg-black shadow-md max-w-full">
       
       <h1 className="font-sans text-logo text-white tracking-tighter lowercase">Tech
       <span className="text-blue-logo">tudo</span>
       <span className="text-mini tracking-normal">.com</span>
        </h1>

        <nav>
        <ul className="flex lg:hidden group-hover:block">
                <li className="hover:bg-hover">
                    <a className="p-8 text-white text-sm no-underline block cursor-pointer ease-in-out duration-300" href="#">Home</a>
                </li>
                <li className="hover:bg-hover relative group ease-in-out duration-300">
                    <a className="p-8 text-white text-sm no-underline block cursor-pointer" href="#">Quem Somos</a>

                    <ul className="hidden group-hover:block absolute top-15 right-0  bg-hover  items-center text-center ease-in-out duration-300">
                    <li className="bg-hover  hover:bg-blue-logo ease-in-out duration-300">
                        <a className="p-10 text-white text-sm no-underline block cursor-pointer z-999" href="#">História</a>
                    </li>
                    <li className="bg-hover hover:bg-blue-logo ease-in-out duration-300">
                        <a className="p-10 text-white text-sm no-underline block cursor-pointer z-999" href="#">Missão</a>
                    </li>
                    <li className="bg-hover hover:bg-blue-logo ease-in-out duration-300">
                        <a className="p-10 text-white text-sm no-underline block cursor-pointer z-999" href="#">Visão</a>
                    </li>
                    <li className="bg-hover hover:bg-blue-logo ease-in-out duration-300">
                        <a className="p-10 text-white text-sm no-underline block cursor-pointer z-999" href="#">Valores</a>
                    </li>
                    </ul>

                </li>
                
				<li className="hover:bg-hover relative group ease-in-out duration-300">
					<a className="p-8 text-white text-sm no-underline block cursor-pointer" href="#">Produtos</a>

					<ul className="hidden group-hover:block absolute top-[95%] right-0 bg-hover items-center text-center ease-in-out duration-300">
						<li className="bg-hover  hover:bg-blue-logo ease-in-out duration-300">
							<a className="p-10 text-white text-sm no-underline block cursor-pointer" href="#">Computadores</a>
						</li>
						<li className="bg-hover  hover:bg-blue-logo">
							<a className="p-10 text-white text-sm no-underline block cursor-pointer" href="#">Celulares</a>
						</li>
						<li className="bg-hover  hover:bg-blue-logo">
							<a className="p-10 text-white text-sm no-underline block cursor-pointer" href="#">Headsets</a>
						</li>
						<li className="bg-hover  hover:bg-blue-logo relative group">     
							<a className="p-10 text-white text-sm no-underline block cursor-pointer" href="#">Consoles</a>                            
						</li>
					</ul>

				</li>
				<li className="hover:bg-hover relative">
					<a className="p-8 text-white text-sm no-underline block cursor-pointer" href="#">Serviços</a>
				</li>
				<li className="hover:bg-hover relative">
					<a className="p-8 text-white text-sm no-underline block cursor-pointer" href="#">Localização</a>
				</li>
				<li className="hover:bg-hover relative">
					<a className="p-8 text-white text-sm no-underline block cursor-pointer" href="#">Contato</a>
				</li>
				</ul>     
		</nav>
        

<nav className="hidden lg:block">
	<ul className="">
		<li className= "p-7 hover:bg-hover">
			<a className="text-white" href="#">☰</a>
				<ul className="hidden group-hover:block absolute top-[95%] right-0 bg-hover items-center text-center ease-in-out duration-300">
					<li>
						<a href="#">Quem Somos</a>
						<ul className="">
							<li>
								<a href="#">História</a>
							</li>
							<li>
								<a href="#">Missão</a>
							</li>
							<li>
								<a href="#">Visão</a>
							</li>
							<li>
								<a href="#">Valores</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">Produtos</a>
						<ul className="">
							<li>
								<a href="#">Computadores</a>
							</li>
							<li>
								<a href="#">Celulares</a>
							</li>
							<li>
								<a href="#">Headsets</a>
							</li>
							<li>
								<a href="#">Consoles</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">Serviços</a>
					</li>
					<li>
						<a href="#">Localização</a>
					</li>
					<li>
						<a href="#">Contato</a>
					</li>
				</ul>
		</li>			
	</ul>
</nav>

    </div>
)
}
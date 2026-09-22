import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
export default function Navbar(){
 const [open,setOpen]=useState(false);
 return <header className="navbar"><nav className="nav-inner" aria-label="Main navigation"><a href="#" className="brand" aria-label="Student Success Center home"><img src="/ssc-logo.png" alt="De La Salle University Student Affairs Student Success Center"/></a><div className="desktop-nav"><a href="#modules">Learning modules</a><span className="nav-divider"/><span>SAS2000</span></div><a href="#modules" className="nav-cta">Find your module <ArrowUpRight size={17}/></a><button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav><AnimatePresence>{open&&<motion.div id="mobile-menu" className="mobile-menu" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} onKeyDown={e=>{if(e.key==='Escape')setOpen(false)}}><a href="#modules" onClick={()=>setOpen(false)}>Explore learning modules <ArrowUpRight size={18}/></a></motion.div>}</AnimatePresence></header>
}

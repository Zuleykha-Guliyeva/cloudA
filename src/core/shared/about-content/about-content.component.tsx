import { useAboutContentStyle } from "./about-content.style"

const AboutContentComponent = ({children,className}) => {
   const classes = useAboutContentStyle(); 
   return (
     <div className={`${classes[className]}`}>
       <div className='container'>
         <div className='row align-center justify-between'>
           <div className='col-md-4'></div>
           <div className='col-md-8'>
             <div className='row'>
               <div className='col-12 text-left'>
                 <p className={classes.aboutTitle}>About us</p>
               </div>
             </div>
             <div className='row'>
               <div className='col-12 text-left'>
                 <p className={classes.aboutDesc}>
                   "AzInTelecom" LLC provides high-quality public cloud services
                   for small and medium-sized enterprises in a data center that
                   meets international standards and certificates in two
                   different geographical areas in Azerbaijan. From resource
                   control and customization for corporate use to ease of
                   application development and maintenance, public cloud
                   services are provided over the Internet and resources are
                   shared among multiple users or tenants.
                 </p>
               </div>
             </div>
             {children}
           </div>
         </div>
       </div>
     </div>
   );
}

export default AboutContentComponent;
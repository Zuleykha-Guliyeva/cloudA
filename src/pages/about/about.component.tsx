import LeadsComponent from 'core/shared/leads/leads.component';
import LoanGreyComponent from 'core/shared/loan-grey-overlay/loan-grey.component';
import ItemsListComponent from './components/Items-list/items-list.component';
import aboutImg from 'assets/images/statics/about/about-img.png';
import { useAboutStyles } from './about.style';
import CategoryComponent from 'core/shared/category-span/category.component';
import CreditStaticItemComponent from 'core/shared/credit-static/credit-static-item.component';
import { generateGuid } from 'core/helpers/generate-guid';
import { useAbout } from './actions/about.query';
import aboutIcon from 'assets/images/statics/about/abouticon.png';
const AboutComponent = () => {
  const classes = useAboutStyles();
  const { data } = useAbout();
  const creditAbout = data;
  console.log(creditAbout);

  return (
    <div className='container'>
      <section className='leadsSection'>
        <LeadsComponent i={4}>
          <></>
        </LeadsComponent>
      </section>
      <section className={classes.aboutImageSection}>
        <div className={classes.greySection}>
          <div className={classes.imgSection}>
            <img src={aboutImg} alt='' />
          </div>
        </div>
      </section>
      <section className='goalSection'>
        <LoanGreyComponent padding='padding' overlay={'aboutOverlay'}>
          <ItemsListComponent />
        </LoanGreyComponent>
      </section>
      <section className='aboutEndSection'>
        <div className='row'>
          <div className='col-md-5'>
            <CategoryComponent text='Apply to loan' />
            <p className={classes.productsTitle}>
              Id duis id turpis mi quisque. Nulla.
            </p>
          </div>
        </div>
        <div className='row justify-end'>
          {creditAbout?.map((credit) => (
            <div key={generateGuid()} className='col-md-4'>
              <CreditStaticItemComponent
                icon={aboutIcon}
                creditPropsTitle={credit?.name}
                creditPropsDesc={credit?.about.description}
                creditProps={''}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutComponent;

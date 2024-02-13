import LeadsComponent from "../leads/leads.component";
import { useLoanGreyStyles } from "./loan-grey.style";

const LoanGreyComponent = ({children,padding,overlay}) => {
    const classes = useLoanGreyStyles();
    const classPadding = padding ? classes[padding] : '';
    const classOverlay = overlay ? classes[overlay] : '';
    return (
      <section className={`${classes.loanCalculator} ${classPadding}`}>
        <div className={`${classes.overlay} ${classOverlay}`}></div>
        <div className='row align-center'>
          <div className='col-md-5'>
            <div className={classes.absolute}>
              <LeadsComponent i={5}>
                <></>
              </LeadsComponent>
            </div>
          </div>
          <div className='col-md-7'>{children}</div>
        </div>
      </section>
    );
}
export default LoanGreyComponent;
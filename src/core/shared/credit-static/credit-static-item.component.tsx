import { useCreditStaticItemStyles } from "./credit-static-item.style";

const CreditStaticItemComponent = ({
  creditPropsTitle,
  creditProps,
  creditPropsDesc,
  icon
}: any) => {
  const classes = useCreditStaticItemStyles();
  return (
    <div className={classes.credit_detail_box}>
      <div className={classes.icon}>
        <img src={icon} alt='' />
      </div>
      <p className={classes.icon_title}>{creditPropsTitle}</p>
      <p>{creditPropsDesc}</p>
      <span className={classes.icon_descrip}>{creditProps}</span>
    </div>
  );
};

export default CreditStaticItemComponent;

import { useStore } from "store/store.config";
import CategoryComponent from "../category-span/category.component";
import { useLeads } from "./actions/leads.query";
import { ILeadsProps } from "./leads";
import { useLeadsStyles } from "./leads.style";

const LeadsComponent: React.FC<ILeadsProps> = ({children,i}) => {
  const classes = useLeadsStyles();
  const {data} = useLeads();
  const loader = useStore('loader');     
  if (!data) {
    return loader;
  }
  let content;
  if (i !== 1) {
    if (i !== 5) {
      content = (
        <div className='row mt-60 pr-30'>
          <div className='col-md-6'>
            <div className={classes.leadTitle}>{data[i].title}</div>
          </div>
          <div className='col-md-6'>
            <div className='mb-4'>
              <CategoryComponent text={data[i].tag} />
            </div>
            <div className={classes.leadSubTitle}>
              <p>{data[i].heading}</p>
            </div>

            <div className={classes.leadDescription}>
              <p className='pb-25'>{data[i].description}</p>
              <div className='w-100'>{children}</div>
            </div>
          </div>
        </div>
      );
    } else {
      content = (
        <div className='row mt-60 pr-30'>
          <div className='col-md-12'>
            <div className='tag mb-4'>
              <CategoryComponent text={data[i].tag} />
            </div>
            <div className={classes.leadSubTitle}>
              <p>{data[i].heading}</p>
            </div>

            <div className={classes.leadDescription}>
              <p className='pb-25'>{data[i].description}</p>
              <div className='w-100'>{children}</div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    content = (
      <div className={classes.relativeRow}>
        <div className='row pr-15'>
          <div className='col-md-6'>
            <div className='tag mb-4'>
              <CategoryComponent text={data[i].tag} />
            </div>
            <div className={classes.leadSubTitle}>
              <p>{data[i].heading}</p>
            </div>

            <div className={classes.leadDescription}>
              <p className='pb-25'>{data[i].description}</p>
              <div className='w-100'>{children}</div>
            </div>
          </div>
          <div className='col-md-6 p-0'>
            <div className={classes.aboutImg}>
              <img src={data[i].file?.url} alt='' />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return content;
};
export default LeadsComponent;
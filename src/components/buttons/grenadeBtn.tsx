import { Badge } from '@douyinfe/semi-ui';

interface GrenadeBtnPops {
  imglink?: string;
  badge?: string | null;
}

const draggableBtnStyle = {
  borderRadius: '100%',
  margin: '3px',
  width: '35px',
  height: '35px',
  display: 'flex',
  placeItems: 'center',
  placeContent: 'center',
  backgroundColor: 'rgba(var(--semi-grey-6), 1)',
  boxShadow: '0 0 0 3px rgba(var(--semi-grey-1), 1)',
  overflow: 'hidden',
};

const GrenadeBtn = (props: GrenadeBtnPops) => {
  return (
    <>
      {props.badge != null ? (
        <Badge
          count={props.badge}
          position='rightBottom'
          type={props.badge === '×' ? 'danger' : 'secondary'}>
          <div style={draggableBtnStyle}>
            <img
              src={props.imglink}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Badge>
      ) : (
        <div style={draggableBtnStyle}>
          <img src={props.imglink} style={{ width: '100%', height: '100%' }} />
        </div>
      )}
    </>
  );
};

export default GrenadeBtn;

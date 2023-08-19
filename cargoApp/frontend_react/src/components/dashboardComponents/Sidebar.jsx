

export default function Sidebar ({color}) {

	return (
		<div className="sidebar" style={{
			backgroundColor: color
		}}>
      <div
        className="sidebar-background"
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex  d-md-none align-items-center justify-content-start">

            <div className="logo-img">
              JayCargo
            </div>

        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { TiShoppingCart } from 'react-icons/ti';

const Cart = () => {
  return (
    <>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-success btn-circle"
          >
            <div className="indicator">
              <TiShoppingCart size={24} />
              <span className="badge badge-sm indicator-item">2</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-1000 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">2 Items</span>
              <span className="text-info">Subtotal: $890</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">
                  Ver carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

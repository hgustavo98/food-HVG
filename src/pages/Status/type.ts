export type CustomerOrder = {
  id: number;
  status: string;
  total: string;
  transactionId: string;
  createdAt: string;
  updatedAt: string;
  customerId: number;
  orderItems: {
    id: number;
    quantity: number;
    subTotal: string;
    createdAt: string;
    updatedAt: string;
    orderId: number;
    snackId: number;
    snack: {
      id: number;
      snack: string;
      name: string;
      description: string;
      price: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    };
  }[];
};

export type OrderItem = {
  id: number;
  quantity: number;
  subTotal: string;
  createdAt: string;
  updatedAt: string;
  orderId: number;
  snackId: number;
  snack: {
    id: number;
    snack: string;
    name: string;
    description: string;
    price: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type CustomerTotalSpent = {
  _sum: {
    total: string;
  };
};

export type CustomerTotalItems = {
  _sum: {
    quantity: number;
  };
};


export type PaidOrder = {
  snack: {
    name: string;
  };
  order: {
    customer: {
      fullName: string;
    };
  };
};


export type OrderWithItemsGreaterThan2 = {
  id: number;
  status: string;
  total: string;
  transactionId: string;
  createdAt: string;
  updatedAt: string;
  customerId: number;
  customer: {
    id: number;
    fullName: string;
    email: string;
    mobile: string;
    document: string;
    zipCode: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    createdAt: string;
    updatedAt: string;
  };
  orderItems: OrderItem[]; // Reuse the previously defined OrderItem type
};

export type MonthlySalesReport = {
  month: string;
  totalSales: string;
};

export type OrdersByCustomerReport = {
  id: number;
  fullName: string;
  orders: {
    id: number;
    total: string;
  }[];
};


export type SalesBySnackReport = {
  _sum: {
    quantity: number;
    subTotal: string;
  };
  snackId: number;
};

export type CustomersTotalSpent = {
  fullName: string;
  orders: {
    total: string;
    orderItems: {
      snack: {
        name: string;
      };
    }[];
  }[];
};



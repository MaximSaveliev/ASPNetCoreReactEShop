import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/users/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import Products from './components/users/Products'
import Dashboard from './components/users/Dashboard'
import Cart from './components/users/Cart'
import Orders from './components/users/Orders'
import Profile from './components/users/Profile'
import AdminDashboard from './components/admin/AdminDashboard'
import AdminOrders from './components/admin/AdminOrders'
import AdminProducts from './components/admin/AdminProducts'
import CustomerList from './components/admin/CustomerList'
import ManageProducts from './components/admin/ManageProducts'

export default function RouterPage() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/registration' element={<Registration />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/myorders' element={<Orders />} />
                    <Route path='/profile' element={<Profile />} />

                    <Route path='/adminDashboard' element={<AdminDashboard />} />
                    <Route path='/adminOrders' element={<AdminOrders />} />
                    <Route path='/adminProducts' element={<AdminProducts />} />
                    <Route path='/customers' element={<CustomerList />} />
                    <Route path='/editproducts' element={<ManageProducts />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
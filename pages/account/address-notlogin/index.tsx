import AccountEditInfo from '../../../components/AccountEditInfo/AccountEditInfo';
import ColumnLayout from '../../../components/ColumnLayout/ColumnLayout';
import AccountAddress from '../../../components/AccountAddress/Login/AccountAddress';
import AccountAddressNotLogin from '../../../components/AccountAddress/NotLogin/AccountAddressNotLogin';
import AccountChangPassword from '../../../components/AccountChangePassword/AccountChangePassword';

const AddressNotLogin = () => {

  return (
    <section id="account-edit-info">
      <ColumnLayout>
        <AccountAddressNotLogin/>
      </ColumnLayout>
    </section>
  );
};

export default AddressNotLogin;

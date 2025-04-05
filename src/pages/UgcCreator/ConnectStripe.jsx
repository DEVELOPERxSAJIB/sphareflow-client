import React, { useState } from 'react';



const ConnectStripe = () => {
  const [formData, setFormData] = useState({
    company: {
      name: '',
      address: {
        line1: '',
        city: '',
        state: '',
        postal_code: '',
      },
    },
    person: {
      first_name: '',
      last_name: '',
      address: {
        line1: '',
        city: '',
        state: '',
        postal_code: '',
      },
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (section, field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev,
          [parent]: {
            ...(prev)[parent],
            [child]: value,
          },
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev
        },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
    <div className="max-w-2xl bg-white mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Company Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium">Company Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded border p-2"
                value={formData.company.name}
                onChange={(e) =>
                  handleInputChange('company', 'name', e.target.value)
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Street Address
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded border p-2"
                value={formData.company.address.line1}
                onChange={(e) =>
                  handleInputChange('company', 'address.line1', e.target.value)
                }
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded border p-2"
                  value={formData.company.address.city}
                  onChange={(e) =>
                    handleInputChange('company', 'address.city', e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">State</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded border p-2"
                  value={formData.company.address.state}
                  onChange={(e) =>
                    handleInputChange(
                      'company',
                      'address.state',
                      e.target.value,
                    )
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ZIP Code</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded border p-2"
                  value={formData.company.address.postal_code}
                  onChange={(e) =>
                    handleInputChange(
                      'company',
                      'address.postal_code',
                      e.target.value,
                    )
                  }
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded border p-2"
                  value={formData.person.first_name}
                  onChange={(e) =>
                    handleInputChange('person', 'first_name', e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded border p-2"
                  value={formData.person.last_name}
                  onChange={(e) =>
                    handleInputChange('person', 'last_name', e.target.value)
                  }
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Street Address
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded border p-2"
                value={formData.person.address.line1}
                onChange={(e) =>
                  handleInputChange('person', 'address.line1', e.target.value)
                }
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded border p-2"
                  value={formData.person.address.city}
                  onChange={(e) =>
                    handleInputChange('person', 'address.city', e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">State</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded border p-2"
                  value={formData.person.address.state}
                  onChange={(e) =>
                    handleInputChange('person', 'address.state', e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ZIP Code</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded border p-2"
                  value={formData.person.address.postal_code}
                  onChange={(e) =>
                    handleInputChange(
                      'person',
                      'address.postal_code',
                      e.target.value,
                    )
                  }
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {error && <div className="text-red-600 text-sm">{error}</div>}

        <button
          type="submit"
          className="w-full bg-[#0011FF] text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {loading ? 'Processing...' : 'Connect Stripe Account'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default ConnectStripe;

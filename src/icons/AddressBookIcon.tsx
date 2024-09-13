import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AddressBookIcon({
  iconName = 'address-book',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

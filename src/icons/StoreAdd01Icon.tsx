import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StoreAdd01Icon({
  iconName = 'store-add-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

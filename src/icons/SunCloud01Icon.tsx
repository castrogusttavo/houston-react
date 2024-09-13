import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SunCloud01Icon({
  iconName = 'sun-cloud-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

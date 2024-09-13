import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Heading05Icon({
  iconName = 'heading-05',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Billiard01Icon({
  iconName = 'billiard-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

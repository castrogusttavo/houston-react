import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CheckmarkCircle01Icon({
  iconName = 'checkmark-circle-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

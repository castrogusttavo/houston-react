import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RadioactiveAlertIcon({
  iconName = 'radioactive-alert',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

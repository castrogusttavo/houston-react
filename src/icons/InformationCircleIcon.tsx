import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InformationCircleIcon({
  iconName = 'information-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

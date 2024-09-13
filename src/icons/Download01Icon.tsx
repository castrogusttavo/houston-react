import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Download01Icon({
  iconName = 'download-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

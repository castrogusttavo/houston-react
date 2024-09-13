import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowLeft01Icon({
  iconName = 'arrow-left-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}

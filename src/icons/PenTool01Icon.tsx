import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PenTool01Icon({
  iconName = 'pen-tool-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
